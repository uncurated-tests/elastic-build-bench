'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14542<T> = T extends (infer U)[]
  ? DeepReadonlyArray14542<U>
  : T extends object
  ? DeepReadonlyObject14542<T>
  : T;

interface DeepReadonlyArray14542<T> extends ReadonlyArray<DeepReadonly14542<T>> {}

type DeepReadonlyObject14542<T> = {
  readonly [P in keyof T]: DeepReadonly14542<T[P]>;
};

type UnionToIntersection14542<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14542<T> = UnionToIntersection14542<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14542<T extends unknown[], V> = [...T, V];

type TuplifyUnion14542<T, L = LastOf14542<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14542<TuplifyUnion14542<Exclude<T, L>>, L>;

type DeepPartial14542<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14542<T[P]> }
  : T;

type Paths14542<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14542<K, Paths14542<T[K], Prev14542[D]>> : never }[keyof T]
  : never;

type Prev14542 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14542<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14542 {
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

type ConfigPaths14542 = Paths14542<NestedConfig14542>;

interface HeavyProps14542 {
  config: DeepPartial14542<NestedConfig14542>;
  path?: ConfigPaths14542;
}

const HeavyComponent14542 = memo(function HeavyComponent14542({ config }: HeavyProps14542) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14542) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14542 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14542: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14542.displayName = 'HeavyComponent14542';
export default HeavyComponent14542;
