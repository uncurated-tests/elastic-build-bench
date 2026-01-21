'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11877<T> = T extends (infer U)[]
  ? DeepReadonlyArray11877<U>
  : T extends object
  ? DeepReadonlyObject11877<T>
  : T;

interface DeepReadonlyArray11877<T> extends ReadonlyArray<DeepReadonly11877<T>> {}

type DeepReadonlyObject11877<T> = {
  readonly [P in keyof T]: DeepReadonly11877<T[P]>;
};

type UnionToIntersection11877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11877<T> = UnionToIntersection11877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11877<T extends unknown[], V> = [...T, V];

type TuplifyUnion11877<T, L = LastOf11877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11877<TuplifyUnion11877<Exclude<T, L>>, L>;

type DeepPartial11877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11877<T[P]> }
  : T;

type Paths11877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11877<K, Paths11877<T[K], Prev11877[D]>> : never }[keyof T]
  : never;

type Prev11877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11877 {
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

type ConfigPaths11877 = Paths11877<NestedConfig11877>;

interface HeavyProps11877 {
  config: DeepPartial11877<NestedConfig11877>;
  path?: ConfigPaths11877;
}

const HeavyComponent11877 = memo(function HeavyComponent11877({ config }: HeavyProps11877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11877.displayName = 'HeavyComponent11877';
export default HeavyComponent11877;
