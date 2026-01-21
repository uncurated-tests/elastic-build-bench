'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14743<T> = T extends (infer U)[]
  ? DeepReadonlyArray14743<U>
  : T extends object
  ? DeepReadonlyObject14743<T>
  : T;

interface DeepReadonlyArray14743<T> extends ReadonlyArray<DeepReadonly14743<T>> {}

type DeepReadonlyObject14743<T> = {
  readonly [P in keyof T]: DeepReadonly14743<T[P]>;
};

type UnionToIntersection14743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14743<T> = UnionToIntersection14743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14743<T extends unknown[], V> = [...T, V];

type TuplifyUnion14743<T, L = LastOf14743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14743<TuplifyUnion14743<Exclude<T, L>>, L>;

type DeepPartial14743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14743<T[P]> }
  : T;

type Paths14743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14743<K, Paths14743<T[K], Prev14743[D]>> : never }[keyof T]
  : never;

type Prev14743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14743 {
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

type ConfigPaths14743 = Paths14743<NestedConfig14743>;

interface HeavyProps14743 {
  config: DeepPartial14743<NestedConfig14743>;
  path?: ConfigPaths14743;
}

const HeavyComponent14743 = memo(function HeavyComponent14743({ config }: HeavyProps14743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14743.displayName = 'HeavyComponent14743';
export default HeavyComponent14743;
