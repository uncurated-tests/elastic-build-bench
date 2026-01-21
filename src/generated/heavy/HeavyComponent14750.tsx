'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14750<T> = T extends (infer U)[]
  ? DeepReadonlyArray14750<U>
  : T extends object
  ? DeepReadonlyObject14750<T>
  : T;

interface DeepReadonlyArray14750<T> extends ReadonlyArray<DeepReadonly14750<T>> {}

type DeepReadonlyObject14750<T> = {
  readonly [P in keyof T]: DeepReadonly14750<T[P]>;
};

type UnionToIntersection14750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14750<T> = UnionToIntersection14750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14750<T extends unknown[], V> = [...T, V];

type TuplifyUnion14750<T, L = LastOf14750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14750<TuplifyUnion14750<Exclude<T, L>>, L>;

type DeepPartial14750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14750<T[P]> }
  : T;

type Paths14750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14750<K, Paths14750<T[K], Prev14750[D]>> : never }[keyof T]
  : never;

type Prev14750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14750 {
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

type ConfigPaths14750 = Paths14750<NestedConfig14750>;

interface HeavyProps14750 {
  config: DeepPartial14750<NestedConfig14750>;
  path?: ConfigPaths14750;
}

const HeavyComponent14750 = memo(function HeavyComponent14750({ config }: HeavyProps14750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14750.displayName = 'HeavyComponent14750';
export default HeavyComponent14750;
