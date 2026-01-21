'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14140<T> = T extends (infer U)[]
  ? DeepReadonlyArray14140<U>
  : T extends object
  ? DeepReadonlyObject14140<T>
  : T;

interface DeepReadonlyArray14140<T> extends ReadonlyArray<DeepReadonly14140<T>> {}

type DeepReadonlyObject14140<T> = {
  readonly [P in keyof T]: DeepReadonly14140<T[P]>;
};

type UnionToIntersection14140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14140<T> = UnionToIntersection14140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14140<T extends unknown[], V> = [...T, V];

type TuplifyUnion14140<T, L = LastOf14140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14140<TuplifyUnion14140<Exclude<T, L>>, L>;

type DeepPartial14140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14140<T[P]> }
  : T;

type Paths14140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14140<K, Paths14140<T[K], Prev14140[D]>> : never }[keyof T]
  : never;

type Prev14140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14140 {
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

type ConfigPaths14140 = Paths14140<NestedConfig14140>;

interface HeavyProps14140 {
  config: DeepPartial14140<NestedConfig14140>;
  path?: ConfigPaths14140;
}

const HeavyComponent14140 = memo(function HeavyComponent14140({ config }: HeavyProps14140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14140.displayName = 'HeavyComponent14140';
export default HeavyComponent14140;
