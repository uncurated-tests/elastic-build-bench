'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11167<T> = T extends (infer U)[]
  ? DeepReadonlyArray11167<U>
  : T extends object
  ? DeepReadonlyObject11167<T>
  : T;

interface DeepReadonlyArray11167<T> extends ReadonlyArray<DeepReadonly11167<T>> {}

type DeepReadonlyObject11167<T> = {
  readonly [P in keyof T]: DeepReadonly11167<T[P]>;
};

type UnionToIntersection11167<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11167<T> = UnionToIntersection11167<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11167<T extends unknown[], V> = [...T, V];

type TuplifyUnion11167<T, L = LastOf11167<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11167<TuplifyUnion11167<Exclude<T, L>>, L>;

type DeepPartial11167<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11167<T[P]> }
  : T;

type Paths11167<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11167<K, Paths11167<T[K], Prev11167[D]>> : never }[keyof T]
  : never;

type Prev11167 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11167<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11167 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths11167 = Paths11167<NestedConfig11167>;

interface HeavyProps11167 {
  config: DeepPartial11167<NestedConfig11167>;
  path?: ConfigPaths11167;
}

const HeavyComponent11167 = memo(function HeavyComponent11167({ config }: HeavyProps11167) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11167) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11167 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11167: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11167.displayName = 'HeavyComponent11167';
export default HeavyComponent11167;
