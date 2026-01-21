'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14810<T> = T extends (infer U)[]
  ? DeepReadonlyArray14810<U>
  : T extends object
  ? DeepReadonlyObject14810<T>
  : T;

interface DeepReadonlyArray14810<T> extends ReadonlyArray<DeepReadonly14810<T>> {}

type DeepReadonlyObject14810<T> = {
  readonly [P in keyof T]: DeepReadonly14810<T[P]>;
};

type UnionToIntersection14810<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14810<T> = UnionToIntersection14810<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14810<T extends unknown[], V> = [...T, V];

type TuplifyUnion14810<T, L = LastOf14810<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14810<TuplifyUnion14810<Exclude<T, L>>, L>;

type DeepPartial14810<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14810<T[P]> }
  : T;

type Paths14810<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14810<K, Paths14810<T[K], Prev14810[D]>> : never }[keyof T]
  : never;

type Prev14810 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14810<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14810 {
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

type ConfigPaths14810 = Paths14810<NestedConfig14810>;

interface HeavyProps14810 {
  config: DeepPartial14810<NestedConfig14810>;
  path?: ConfigPaths14810;
}

const HeavyComponent14810 = memo(function HeavyComponent14810({ config }: HeavyProps14810) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14810) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14810 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14810: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14810.displayName = 'HeavyComponent14810';
export default HeavyComponent14810;
