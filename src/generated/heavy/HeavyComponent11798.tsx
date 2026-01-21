'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11798<T> = T extends (infer U)[]
  ? DeepReadonlyArray11798<U>
  : T extends object
  ? DeepReadonlyObject11798<T>
  : T;

interface DeepReadonlyArray11798<T> extends ReadonlyArray<DeepReadonly11798<T>> {}

type DeepReadonlyObject11798<T> = {
  readonly [P in keyof T]: DeepReadonly11798<T[P]>;
};

type UnionToIntersection11798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11798<T> = UnionToIntersection11798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11798<T extends unknown[], V> = [...T, V];

type TuplifyUnion11798<T, L = LastOf11798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11798<TuplifyUnion11798<Exclude<T, L>>, L>;

type DeepPartial11798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11798<T[P]> }
  : T;

type Paths11798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11798<K, Paths11798<T[K], Prev11798[D]>> : never }[keyof T]
  : never;

type Prev11798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11798 {
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

type ConfigPaths11798 = Paths11798<NestedConfig11798>;

interface HeavyProps11798 {
  config: DeepPartial11798<NestedConfig11798>;
  path?: ConfigPaths11798;
}

const HeavyComponent11798 = memo(function HeavyComponent11798({ config }: HeavyProps11798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11798.displayName = 'HeavyComponent11798';
export default HeavyComponent11798;
