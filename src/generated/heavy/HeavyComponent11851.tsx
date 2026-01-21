'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11851<T> = T extends (infer U)[]
  ? DeepReadonlyArray11851<U>
  : T extends object
  ? DeepReadonlyObject11851<T>
  : T;

interface DeepReadonlyArray11851<T> extends ReadonlyArray<DeepReadonly11851<T>> {}

type DeepReadonlyObject11851<T> = {
  readonly [P in keyof T]: DeepReadonly11851<T[P]>;
};

type UnionToIntersection11851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11851<T> = UnionToIntersection11851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11851<T extends unknown[], V> = [...T, V];

type TuplifyUnion11851<T, L = LastOf11851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11851<TuplifyUnion11851<Exclude<T, L>>, L>;

type DeepPartial11851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11851<T[P]> }
  : T;

type Paths11851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11851<K, Paths11851<T[K], Prev11851[D]>> : never }[keyof T]
  : never;

type Prev11851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11851 {
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

type ConfigPaths11851 = Paths11851<NestedConfig11851>;

interface HeavyProps11851 {
  config: DeepPartial11851<NestedConfig11851>;
  path?: ConfigPaths11851;
}

const HeavyComponent11851 = memo(function HeavyComponent11851({ config }: HeavyProps11851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11851.displayName = 'HeavyComponent11851';
export default HeavyComponent11851;
