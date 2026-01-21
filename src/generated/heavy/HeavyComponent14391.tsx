'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14391<T> = T extends (infer U)[]
  ? DeepReadonlyArray14391<U>
  : T extends object
  ? DeepReadonlyObject14391<T>
  : T;

interface DeepReadonlyArray14391<T> extends ReadonlyArray<DeepReadonly14391<T>> {}

type DeepReadonlyObject14391<T> = {
  readonly [P in keyof T]: DeepReadonly14391<T[P]>;
};

type UnionToIntersection14391<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14391<T> = UnionToIntersection14391<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14391<T extends unknown[], V> = [...T, V];

type TuplifyUnion14391<T, L = LastOf14391<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14391<TuplifyUnion14391<Exclude<T, L>>, L>;

type DeepPartial14391<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14391<T[P]> }
  : T;

type Paths14391<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14391<K, Paths14391<T[K], Prev14391[D]>> : never }[keyof T]
  : never;

type Prev14391 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14391<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14391 {
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

type ConfigPaths14391 = Paths14391<NestedConfig14391>;

interface HeavyProps14391 {
  config: DeepPartial14391<NestedConfig14391>;
  path?: ConfigPaths14391;
}

const HeavyComponent14391 = memo(function HeavyComponent14391({ config }: HeavyProps14391) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14391) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14391 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14391: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14391.displayName = 'HeavyComponent14391';
export default HeavyComponent14391;
