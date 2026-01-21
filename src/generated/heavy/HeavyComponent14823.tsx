'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14823<T> = T extends (infer U)[]
  ? DeepReadonlyArray14823<U>
  : T extends object
  ? DeepReadonlyObject14823<T>
  : T;

interface DeepReadonlyArray14823<T> extends ReadonlyArray<DeepReadonly14823<T>> {}

type DeepReadonlyObject14823<T> = {
  readonly [P in keyof T]: DeepReadonly14823<T[P]>;
};

type UnionToIntersection14823<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14823<T> = UnionToIntersection14823<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14823<T extends unknown[], V> = [...T, V];

type TuplifyUnion14823<T, L = LastOf14823<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14823<TuplifyUnion14823<Exclude<T, L>>, L>;

type DeepPartial14823<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14823<T[P]> }
  : T;

type Paths14823<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14823<K, Paths14823<T[K], Prev14823[D]>> : never }[keyof T]
  : never;

type Prev14823 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14823<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14823 {
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

type ConfigPaths14823 = Paths14823<NestedConfig14823>;

interface HeavyProps14823 {
  config: DeepPartial14823<NestedConfig14823>;
  path?: ConfigPaths14823;
}

const HeavyComponent14823 = memo(function HeavyComponent14823({ config }: HeavyProps14823) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14823) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14823 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14823: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14823.displayName = 'HeavyComponent14823';
export default HeavyComponent14823;
