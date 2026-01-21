'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14833<T> = T extends (infer U)[]
  ? DeepReadonlyArray14833<U>
  : T extends object
  ? DeepReadonlyObject14833<T>
  : T;

interface DeepReadonlyArray14833<T> extends ReadonlyArray<DeepReadonly14833<T>> {}

type DeepReadonlyObject14833<T> = {
  readonly [P in keyof T]: DeepReadonly14833<T[P]>;
};

type UnionToIntersection14833<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14833<T> = UnionToIntersection14833<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14833<T extends unknown[], V> = [...T, V];

type TuplifyUnion14833<T, L = LastOf14833<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14833<TuplifyUnion14833<Exclude<T, L>>, L>;

type DeepPartial14833<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14833<T[P]> }
  : T;

type Paths14833<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14833<K, Paths14833<T[K], Prev14833[D]>> : never }[keyof T]
  : never;

type Prev14833 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14833<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14833 {
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

type ConfigPaths14833 = Paths14833<NestedConfig14833>;

interface HeavyProps14833 {
  config: DeepPartial14833<NestedConfig14833>;
  path?: ConfigPaths14833;
}

const HeavyComponent14833 = memo(function HeavyComponent14833({ config }: HeavyProps14833) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14833) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14833 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14833: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14833.displayName = 'HeavyComponent14833';
export default HeavyComponent14833;
