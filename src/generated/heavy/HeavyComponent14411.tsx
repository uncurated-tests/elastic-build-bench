'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14411<T> = T extends (infer U)[]
  ? DeepReadonlyArray14411<U>
  : T extends object
  ? DeepReadonlyObject14411<T>
  : T;

interface DeepReadonlyArray14411<T> extends ReadonlyArray<DeepReadonly14411<T>> {}

type DeepReadonlyObject14411<T> = {
  readonly [P in keyof T]: DeepReadonly14411<T[P]>;
};

type UnionToIntersection14411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14411<T> = UnionToIntersection14411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14411<T extends unknown[], V> = [...T, V];

type TuplifyUnion14411<T, L = LastOf14411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14411<TuplifyUnion14411<Exclude<T, L>>, L>;

type DeepPartial14411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14411<T[P]> }
  : T;

type Paths14411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14411<K, Paths14411<T[K], Prev14411[D]>> : never }[keyof T]
  : never;

type Prev14411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14411 {
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

type ConfigPaths14411 = Paths14411<NestedConfig14411>;

interface HeavyProps14411 {
  config: DeepPartial14411<NestedConfig14411>;
  path?: ConfigPaths14411;
}

const HeavyComponent14411 = memo(function HeavyComponent14411({ config }: HeavyProps14411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14411.displayName = 'HeavyComponent14411';
export default HeavyComponent14411;
