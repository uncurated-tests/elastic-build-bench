'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14202<T> = T extends (infer U)[]
  ? DeepReadonlyArray14202<U>
  : T extends object
  ? DeepReadonlyObject14202<T>
  : T;

interface DeepReadonlyArray14202<T> extends ReadonlyArray<DeepReadonly14202<T>> {}

type DeepReadonlyObject14202<T> = {
  readonly [P in keyof T]: DeepReadonly14202<T[P]>;
};

type UnionToIntersection14202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14202<T> = UnionToIntersection14202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14202<T extends unknown[], V> = [...T, V];

type TuplifyUnion14202<T, L = LastOf14202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14202<TuplifyUnion14202<Exclude<T, L>>, L>;

type DeepPartial14202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14202<T[P]> }
  : T;

type Paths14202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14202<K, Paths14202<T[K], Prev14202[D]>> : never }[keyof T]
  : never;

type Prev14202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14202 {
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

type ConfigPaths14202 = Paths14202<NestedConfig14202>;

interface HeavyProps14202 {
  config: DeepPartial14202<NestedConfig14202>;
  path?: ConfigPaths14202;
}

const HeavyComponent14202 = memo(function HeavyComponent14202({ config }: HeavyProps14202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14202.displayName = 'HeavyComponent14202';
export default HeavyComponent14202;
