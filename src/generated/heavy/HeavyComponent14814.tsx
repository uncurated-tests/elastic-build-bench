'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14814<T> = T extends (infer U)[]
  ? DeepReadonlyArray14814<U>
  : T extends object
  ? DeepReadonlyObject14814<T>
  : T;

interface DeepReadonlyArray14814<T> extends ReadonlyArray<DeepReadonly14814<T>> {}

type DeepReadonlyObject14814<T> = {
  readonly [P in keyof T]: DeepReadonly14814<T[P]>;
};

type UnionToIntersection14814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14814<T> = UnionToIntersection14814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14814<T extends unknown[], V> = [...T, V];

type TuplifyUnion14814<T, L = LastOf14814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14814<TuplifyUnion14814<Exclude<T, L>>, L>;

type DeepPartial14814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14814<T[P]> }
  : T;

type Paths14814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14814<K, Paths14814<T[K], Prev14814[D]>> : never }[keyof T]
  : never;

type Prev14814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14814 {
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

type ConfigPaths14814 = Paths14814<NestedConfig14814>;

interface HeavyProps14814 {
  config: DeepPartial14814<NestedConfig14814>;
  path?: ConfigPaths14814;
}

const HeavyComponent14814 = memo(function HeavyComponent14814({ config }: HeavyProps14814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14814.displayName = 'HeavyComponent14814';
export default HeavyComponent14814;
