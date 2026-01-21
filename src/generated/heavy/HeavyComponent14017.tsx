'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14017<T> = T extends (infer U)[]
  ? DeepReadonlyArray14017<U>
  : T extends object
  ? DeepReadonlyObject14017<T>
  : T;

interface DeepReadonlyArray14017<T> extends ReadonlyArray<DeepReadonly14017<T>> {}

type DeepReadonlyObject14017<T> = {
  readonly [P in keyof T]: DeepReadonly14017<T[P]>;
};

type UnionToIntersection14017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14017<T> = UnionToIntersection14017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14017<T extends unknown[], V> = [...T, V];

type TuplifyUnion14017<T, L = LastOf14017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14017<TuplifyUnion14017<Exclude<T, L>>, L>;

type DeepPartial14017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14017<T[P]> }
  : T;

type Paths14017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14017<K, Paths14017<T[K], Prev14017[D]>> : never }[keyof T]
  : never;

type Prev14017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14017 {
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

type ConfigPaths14017 = Paths14017<NestedConfig14017>;

interface HeavyProps14017 {
  config: DeepPartial14017<NestedConfig14017>;
  path?: ConfigPaths14017;
}

const HeavyComponent14017 = memo(function HeavyComponent14017({ config }: HeavyProps14017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14017.displayName = 'HeavyComponent14017';
export default HeavyComponent14017;
