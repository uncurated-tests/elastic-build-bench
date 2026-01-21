'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14727<T> = T extends (infer U)[]
  ? DeepReadonlyArray14727<U>
  : T extends object
  ? DeepReadonlyObject14727<T>
  : T;

interface DeepReadonlyArray14727<T> extends ReadonlyArray<DeepReadonly14727<T>> {}

type DeepReadonlyObject14727<T> = {
  readonly [P in keyof T]: DeepReadonly14727<T[P]>;
};

type UnionToIntersection14727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14727<T> = UnionToIntersection14727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14727<T extends unknown[], V> = [...T, V];

type TuplifyUnion14727<T, L = LastOf14727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14727<TuplifyUnion14727<Exclude<T, L>>, L>;

type DeepPartial14727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14727<T[P]> }
  : T;

type Paths14727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14727<K, Paths14727<T[K], Prev14727[D]>> : never }[keyof T]
  : never;

type Prev14727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14727 {
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

type ConfigPaths14727 = Paths14727<NestedConfig14727>;

interface HeavyProps14727 {
  config: DeepPartial14727<NestedConfig14727>;
  path?: ConfigPaths14727;
}

const HeavyComponent14727 = memo(function HeavyComponent14727({ config }: HeavyProps14727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14727.displayName = 'HeavyComponent14727';
export default HeavyComponent14727;
