'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly654<T> = T extends (infer U)[]
  ? DeepReadonlyArray654<U>
  : T extends object
  ? DeepReadonlyObject654<T>
  : T;

interface DeepReadonlyArray654<T> extends ReadonlyArray<DeepReadonly654<T>> {}

type DeepReadonlyObject654<T> = {
  readonly [P in keyof T]: DeepReadonly654<T[P]>;
};

type UnionToIntersection654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf654<T> = UnionToIntersection654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push654<T extends unknown[], V> = [...T, V];

type TuplifyUnion654<T, L = LastOf654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push654<TuplifyUnion654<Exclude<T, L>>, L>;

type DeepPartial654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial654<T[P]> }
  : T;

type Paths654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join654<K, Paths654<T[K], Prev654[D]>> : never }[keyof T]
  : never;

type Prev654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig654 {
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

type ConfigPaths654 = Paths654<NestedConfig654>;

interface HeavyProps654 {
  config: DeepPartial654<NestedConfig654>;
  path?: ConfigPaths654;
}

const HeavyComponent654 = memo(function HeavyComponent654({ config }: HeavyProps654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent654.displayName = 'HeavyComponent654';
export default HeavyComponent654;
