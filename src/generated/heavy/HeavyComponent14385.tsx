'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14385<T> = T extends (infer U)[]
  ? DeepReadonlyArray14385<U>
  : T extends object
  ? DeepReadonlyObject14385<T>
  : T;

interface DeepReadonlyArray14385<T> extends ReadonlyArray<DeepReadonly14385<T>> {}

type DeepReadonlyObject14385<T> = {
  readonly [P in keyof T]: DeepReadonly14385<T[P]>;
};

type UnionToIntersection14385<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14385<T> = UnionToIntersection14385<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14385<T extends unknown[], V> = [...T, V];

type TuplifyUnion14385<T, L = LastOf14385<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14385<TuplifyUnion14385<Exclude<T, L>>, L>;

type DeepPartial14385<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14385<T[P]> }
  : T;

type Paths14385<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14385<K, Paths14385<T[K], Prev14385[D]>> : never }[keyof T]
  : never;

type Prev14385 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14385<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14385 {
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

type ConfigPaths14385 = Paths14385<NestedConfig14385>;

interface HeavyProps14385 {
  config: DeepPartial14385<NestedConfig14385>;
  path?: ConfigPaths14385;
}

const HeavyComponent14385 = memo(function HeavyComponent14385({ config }: HeavyProps14385) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14385) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14385 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14385: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14385.displayName = 'HeavyComponent14385';
export default HeavyComponent14385;
