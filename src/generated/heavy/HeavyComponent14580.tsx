'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14580<T> = T extends (infer U)[]
  ? DeepReadonlyArray14580<U>
  : T extends object
  ? DeepReadonlyObject14580<T>
  : T;

interface DeepReadonlyArray14580<T> extends ReadonlyArray<DeepReadonly14580<T>> {}

type DeepReadonlyObject14580<T> = {
  readonly [P in keyof T]: DeepReadonly14580<T[P]>;
};

type UnionToIntersection14580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14580<T> = UnionToIntersection14580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14580<T extends unknown[], V> = [...T, V];

type TuplifyUnion14580<T, L = LastOf14580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14580<TuplifyUnion14580<Exclude<T, L>>, L>;

type DeepPartial14580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14580<T[P]> }
  : T;

type Paths14580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14580<K, Paths14580<T[K], Prev14580[D]>> : never }[keyof T]
  : never;

type Prev14580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14580 {
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

type ConfigPaths14580 = Paths14580<NestedConfig14580>;

interface HeavyProps14580 {
  config: DeepPartial14580<NestedConfig14580>;
  path?: ConfigPaths14580;
}

const HeavyComponent14580 = memo(function HeavyComponent14580({ config }: HeavyProps14580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14580.displayName = 'HeavyComponent14580';
export default HeavyComponent14580;
