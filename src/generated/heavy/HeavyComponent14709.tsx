'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14709<T> = T extends (infer U)[]
  ? DeepReadonlyArray14709<U>
  : T extends object
  ? DeepReadonlyObject14709<T>
  : T;

interface DeepReadonlyArray14709<T> extends ReadonlyArray<DeepReadonly14709<T>> {}

type DeepReadonlyObject14709<T> = {
  readonly [P in keyof T]: DeepReadonly14709<T[P]>;
};

type UnionToIntersection14709<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14709<T> = UnionToIntersection14709<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14709<T extends unknown[], V> = [...T, V];

type TuplifyUnion14709<T, L = LastOf14709<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14709<TuplifyUnion14709<Exclude<T, L>>, L>;

type DeepPartial14709<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14709<T[P]> }
  : T;

type Paths14709<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14709<K, Paths14709<T[K], Prev14709[D]>> : never }[keyof T]
  : never;

type Prev14709 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14709<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14709 {
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

type ConfigPaths14709 = Paths14709<NestedConfig14709>;

interface HeavyProps14709 {
  config: DeepPartial14709<NestedConfig14709>;
  path?: ConfigPaths14709;
}

const HeavyComponent14709 = memo(function HeavyComponent14709({ config }: HeavyProps14709) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14709) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14709 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14709: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14709.displayName = 'HeavyComponent14709';
export default HeavyComponent14709;
