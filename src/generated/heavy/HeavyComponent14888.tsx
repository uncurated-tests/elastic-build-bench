'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14888<T> = T extends (infer U)[]
  ? DeepReadonlyArray14888<U>
  : T extends object
  ? DeepReadonlyObject14888<T>
  : T;

interface DeepReadonlyArray14888<T> extends ReadonlyArray<DeepReadonly14888<T>> {}

type DeepReadonlyObject14888<T> = {
  readonly [P in keyof T]: DeepReadonly14888<T[P]>;
};

type UnionToIntersection14888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14888<T> = UnionToIntersection14888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14888<T extends unknown[], V> = [...T, V];

type TuplifyUnion14888<T, L = LastOf14888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14888<TuplifyUnion14888<Exclude<T, L>>, L>;

type DeepPartial14888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14888<T[P]> }
  : T;

type Paths14888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14888<K, Paths14888<T[K], Prev14888[D]>> : never }[keyof T]
  : never;

type Prev14888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14888 {
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

type ConfigPaths14888 = Paths14888<NestedConfig14888>;

interface HeavyProps14888 {
  config: DeepPartial14888<NestedConfig14888>;
  path?: ConfigPaths14888;
}

const HeavyComponent14888 = memo(function HeavyComponent14888({ config }: HeavyProps14888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14888.displayName = 'HeavyComponent14888';
export default HeavyComponent14888;
