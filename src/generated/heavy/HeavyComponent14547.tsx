'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14547<T> = T extends (infer U)[]
  ? DeepReadonlyArray14547<U>
  : T extends object
  ? DeepReadonlyObject14547<T>
  : T;

interface DeepReadonlyArray14547<T> extends ReadonlyArray<DeepReadonly14547<T>> {}

type DeepReadonlyObject14547<T> = {
  readonly [P in keyof T]: DeepReadonly14547<T[P]>;
};

type UnionToIntersection14547<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14547<T> = UnionToIntersection14547<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14547<T extends unknown[], V> = [...T, V];

type TuplifyUnion14547<T, L = LastOf14547<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14547<TuplifyUnion14547<Exclude<T, L>>, L>;

type DeepPartial14547<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14547<T[P]> }
  : T;

type Paths14547<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14547<K, Paths14547<T[K], Prev14547[D]>> : never }[keyof T]
  : never;

type Prev14547 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14547<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14547 {
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

type ConfigPaths14547 = Paths14547<NestedConfig14547>;

interface HeavyProps14547 {
  config: DeepPartial14547<NestedConfig14547>;
  path?: ConfigPaths14547;
}

const HeavyComponent14547 = memo(function HeavyComponent14547({ config }: HeavyProps14547) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14547) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14547 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14547: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14547.displayName = 'HeavyComponent14547';
export default HeavyComponent14547;
