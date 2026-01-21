'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14461<T> = T extends (infer U)[]
  ? DeepReadonlyArray14461<U>
  : T extends object
  ? DeepReadonlyObject14461<T>
  : T;

interface DeepReadonlyArray14461<T> extends ReadonlyArray<DeepReadonly14461<T>> {}

type DeepReadonlyObject14461<T> = {
  readonly [P in keyof T]: DeepReadonly14461<T[P]>;
};

type UnionToIntersection14461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14461<T> = UnionToIntersection14461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14461<T extends unknown[], V> = [...T, V];

type TuplifyUnion14461<T, L = LastOf14461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14461<TuplifyUnion14461<Exclude<T, L>>, L>;

type DeepPartial14461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14461<T[P]> }
  : T;

type Paths14461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14461<K, Paths14461<T[K], Prev14461[D]>> : never }[keyof T]
  : never;

type Prev14461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14461 {
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

type ConfigPaths14461 = Paths14461<NestedConfig14461>;

interface HeavyProps14461 {
  config: DeepPartial14461<NestedConfig14461>;
  path?: ConfigPaths14461;
}

const HeavyComponent14461 = memo(function HeavyComponent14461({ config }: HeavyProps14461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14461.displayName = 'HeavyComponent14461';
export default HeavyComponent14461;
