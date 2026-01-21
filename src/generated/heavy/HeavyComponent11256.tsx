'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11256<T> = T extends (infer U)[]
  ? DeepReadonlyArray11256<U>
  : T extends object
  ? DeepReadonlyObject11256<T>
  : T;

interface DeepReadonlyArray11256<T> extends ReadonlyArray<DeepReadonly11256<T>> {}

type DeepReadonlyObject11256<T> = {
  readonly [P in keyof T]: DeepReadonly11256<T[P]>;
};

type UnionToIntersection11256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11256<T> = UnionToIntersection11256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11256<T extends unknown[], V> = [...T, V];

type TuplifyUnion11256<T, L = LastOf11256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11256<TuplifyUnion11256<Exclude<T, L>>, L>;

type DeepPartial11256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11256<T[P]> }
  : T;

type Paths11256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11256<K, Paths11256<T[K], Prev11256[D]>> : never }[keyof T]
  : never;

type Prev11256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11256 {
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

type ConfigPaths11256 = Paths11256<NestedConfig11256>;

interface HeavyProps11256 {
  config: DeepPartial11256<NestedConfig11256>;
  path?: ConfigPaths11256;
}

const HeavyComponent11256 = memo(function HeavyComponent11256({ config }: HeavyProps11256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11256.displayName = 'HeavyComponent11256';
export default HeavyComponent11256;
