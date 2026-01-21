'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14360<T> = T extends (infer U)[]
  ? DeepReadonlyArray14360<U>
  : T extends object
  ? DeepReadonlyObject14360<T>
  : T;

interface DeepReadonlyArray14360<T> extends ReadonlyArray<DeepReadonly14360<T>> {}

type DeepReadonlyObject14360<T> = {
  readonly [P in keyof T]: DeepReadonly14360<T[P]>;
};

type UnionToIntersection14360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14360<T> = UnionToIntersection14360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14360<T extends unknown[], V> = [...T, V];

type TuplifyUnion14360<T, L = LastOf14360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14360<TuplifyUnion14360<Exclude<T, L>>, L>;

type DeepPartial14360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14360<T[P]> }
  : T;

type Paths14360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14360<K, Paths14360<T[K], Prev14360[D]>> : never }[keyof T]
  : never;

type Prev14360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14360 {
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

type ConfigPaths14360 = Paths14360<NestedConfig14360>;

interface HeavyProps14360 {
  config: DeepPartial14360<NestedConfig14360>;
  path?: ConfigPaths14360;
}

const HeavyComponent14360 = memo(function HeavyComponent14360({ config }: HeavyProps14360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14360.displayName = 'HeavyComponent14360';
export default HeavyComponent14360;
