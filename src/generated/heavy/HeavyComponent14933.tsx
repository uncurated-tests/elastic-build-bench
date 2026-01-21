'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14933<T> = T extends (infer U)[]
  ? DeepReadonlyArray14933<U>
  : T extends object
  ? DeepReadonlyObject14933<T>
  : T;

interface DeepReadonlyArray14933<T> extends ReadonlyArray<DeepReadonly14933<T>> {}

type DeepReadonlyObject14933<T> = {
  readonly [P in keyof T]: DeepReadonly14933<T[P]>;
};

type UnionToIntersection14933<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14933<T> = UnionToIntersection14933<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14933<T extends unknown[], V> = [...T, V];

type TuplifyUnion14933<T, L = LastOf14933<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14933<TuplifyUnion14933<Exclude<T, L>>, L>;

type DeepPartial14933<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14933<T[P]> }
  : T;

type Paths14933<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14933<K, Paths14933<T[K], Prev14933[D]>> : never }[keyof T]
  : never;

type Prev14933 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14933<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14933 {
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

type ConfigPaths14933 = Paths14933<NestedConfig14933>;

interface HeavyProps14933 {
  config: DeepPartial14933<NestedConfig14933>;
  path?: ConfigPaths14933;
}

const HeavyComponent14933 = memo(function HeavyComponent14933({ config }: HeavyProps14933) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14933) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14933 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14933: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14933.displayName = 'HeavyComponent14933';
export default HeavyComponent14933;
