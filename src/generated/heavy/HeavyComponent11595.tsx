'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11595<T> = T extends (infer U)[]
  ? DeepReadonlyArray11595<U>
  : T extends object
  ? DeepReadonlyObject11595<T>
  : T;

interface DeepReadonlyArray11595<T> extends ReadonlyArray<DeepReadonly11595<T>> {}

type DeepReadonlyObject11595<T> = {
  readonly [P in keyof T]: DeepReadonly11595<T[P]>;
};

type UnionToIntersection11595<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11595<T> = UnionToIntersection11595<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11595<T extends unknown[], V> = [...T, V];

type TuplifyUnion11595<T, L = LastOf11595<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11595<TuplifyUnion11595<Exclude<T, L>>, L>;

type DeepPartial11595<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11595<T[P]> }
  : T;

type Paths11595<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11595<K, Paths11595<T[K], Prev11595[D]>> : never }[keyof T]
  : never;

type Prev11595 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11595<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11595 {
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

type ConfigPaths11595 = Paths11595<NestedConfig11595>;

interface HeavyProps11595 {
  config: DeepPartial11595<NestedConfig11595>;
  path?: ConfigPaths11595;
}

const HeavyComponent11595 = memo(function HeavyComponent11595({ config }: HeavyProps11595) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11595) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11595 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11595: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11595.displayName = 'HeavyComponent11595';
export default HeavyComponent11595;
