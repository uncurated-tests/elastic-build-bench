'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14954<T> = T extends (infer U)[]
  ? DeepReadonlyArray14954<U>
  : T extends object
  ? DeepReadonlyObject14954<T>
  : T;

interface DeepReadonlyArray14954<T> extends ReadonlyArray<DeepReadonly14954<T>> {}

type DeepReadonlyObject14954<T> = {
  readonly [P in keyof T]: DeepReadonly14954<T[P]>;
};

type UnionToIntersection14954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14954<T> = UnionToIntersection14954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14954<T extends unknown[], V> = [...T, V];

type TuplifyUnion14954<T, L = LastOf14954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14954<TuplifyUnion14954<Exclude<T, L>>, L>;

type DeepPartial14954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14954<T[P]> }
  : T;

type Paths14954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14954<K, Paths14954<T[K], Prev14954[D]>> : never }[keyof T]
  : never;

type Prev14954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14954 {
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

type ConfigPaths14954 = Paths14954<NestedConfig14954>;

interface HeavyProps14954 {
  config: DeepPartial14954<NestedConfig14954>;
  path?: ConfigPaths14954;
}

const HeavyComponent14954 = memo(function HeavyComponent14954({ config }: HeavyProps14954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14954.displayName = 'HeavyComponent14954';
export default HeavyComponent14954;
