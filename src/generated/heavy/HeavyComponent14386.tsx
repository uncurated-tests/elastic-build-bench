'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14386<T> = T extends (infer U)[]
  ? DeepReadonlyArray14386<U>
  : T extends object
  ? DeepReadonlyObject14386<T>
  : T;

interface DeepReadonlyArray14386<T> extends ReadonlyArray<DeepReadonly14386<T>> {}

type DeepReadonlyObject14386<T> = {
  readonly [P in keyof T]: DeepReadonly14386<T[P]>;
};

type UnionToIntersection14386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14386<T> = UnionToIntersection14386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14386<T extends unknown[], V> = [...T, V];

type TuplifyUnion14386<T, L = LastOf14386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14386<TuplifyUnion14386<Exclude<T, L>>, L>;

type DeepPartial14386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14386<T[P]> }
  : T;

type Paths14386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14386<K, Paths14386<T[K], Prev14386[D]>> : never }[keyof T]
  : never;

type Prev14386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14386 {
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

type ConfigPaths14386 = Paths14386<NestedConfig14386>;

interface HeavyProps14386 {
  config: DeepPartial14386<NestedConfig14386>;
  path?: ConfigPaths14386;
}

const HeavyComponent14386 = memo(function HeavyComponent14386({ config }: HeavyProps14386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14386.displayName = 'HeavyComponent14386';
export default HeavyComponent14386;
