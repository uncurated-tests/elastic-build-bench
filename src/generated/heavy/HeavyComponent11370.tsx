'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11370<T> = T extends (infer U)[]
  ? DeepReadonlyArray11370<U>
  : T extends object
  ? DeepReadonlyObject11370<T>
  : T;

interface DeepReadonlyArray11370<T> extends ReadonlyArray<DeepReadonly11370<T>> {}

type DeepReadonlyObject11370<T> = {
  readonly [P in keyof T]: DeepReadonly11370<T[P]>;
};

type UnionToIntersection11370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11370<T> = UnionToIntersection11370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11370<T extends unknown[], V> = [...T, V];

type TuplifyUnion11370<T, L = LastOf11370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11370<TuplifyUnion11370<Exclude<T, L>>, L>;

type DeepPartial11370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11370<T[P]> }
  : T;

type Paths11370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11370<K, Paths11370<T[K], Prev11370[D]>> : never }[keyof T]
  : never;

type Prev11370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11370 {
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

type ConfigPaths11370 = Paths11370<NestedConfig11370>;

interface HeavyProps11370 {
  config: DeepPartial11370<NestedConfig11370>;
  path?: ConfigPaths11370;
}

const HeavyComponent11370 = memo(function HeavyComponent11370({ config }: HeavyProps11370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11370.displayName = 'HeavyComponent11370';
export default HeavyComponent11370;
