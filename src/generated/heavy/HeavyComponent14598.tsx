'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14598<T> = T extends (infer U)[]
  ? DeepReadonlyArray14598<U>
  : T extends object
  ? DeepReadonlyObject14598<T>
  : T;

interface DeepReadonlyArray14598<T> extends ReadonlyArray<DeepReadonly14598<T>> {}

type DeepReadonlyObject14598<T> = {
  readonly [P in keyof T]: DeepReadonly14598<T[P]>;
};

type UnionToIntersection14598<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14598<T> = UnionToIntersection14598<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14598<T extends unknown[], V> = [...T, V];

type TuplifyUnion14598<T, L = LastOf14598<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14598<TuplifyUnion14598<Exclude<T, L>>, L>;

type DeepPartial14598<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14598<T[P]> }
  : T;

type Paths14598<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14598<K, Paths14598<T[K], Prev14598[D]>> : never }[keyof T]
  : never;

type Prev14598 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14598<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14598 {
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

type ConfigPaths14598 = Paths14598<NestedConfig14598>;

interface HeavyProps14598 {
  config: DeepPartial14598<NestedConfig14598>;
  path?: ConfigPaths14598;
}

const HeavyComponent14598 = memo(function HeavyComponent14598({ config }: HeavyProps14598) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14598) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14598 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14598: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14598.displayName = 'HeavyComponent14598';
export default HeavyComponent14598;
