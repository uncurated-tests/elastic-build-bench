'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14731<T> = T extends (infer U)[]
  ? DeepReadonlyArray14731<U>
  : T extends object
  ? DeepReadonlyObject14731<T>
  : T;

interface DeepReadonlyArray14731<T> extends ReadonlyArray<DeepReadonly14731<T>> {}

type DeepReadonlyObject14731<T> = {
  readonly [P in keyof T]: DeepReadonly14731<T[P]>;
};

type UnionToIntersection14731<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14731<T> = UnionToIntersection14731<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14731<T extends unknown[], V> = [...T, V];

type TuplifyUnion14731<T, L = LastOf14731<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14731<TuplifyUnion14731<Exclude<T, L>>, L>;

type DeepPartial14731<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14731<T[P]> }
  : T;

type Paths14731<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14731<K, Paths14731<T[K], Prev14731[D]>> : never }[keyof T]
  : never;

type Prev14731 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14731<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14731 {
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

type ConfigPaths14731 = Paths14731<NestedConfig14731>;

interface HeavyProps14731 {
  config: DeepPartial14731<NestedConfig14731>;
  path?: ConfigPaths14731;
}

const HeavyComponent14731 = memo(function HeavyComponent14731({ config }: HeavyProps14731) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14731) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14731 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14731: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14731.displayName = 'HeavyComponent14731';
export default HeavyComponent14731;
