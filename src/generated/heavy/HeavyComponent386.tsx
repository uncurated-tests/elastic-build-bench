'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly386<T> = T extends (infer U)[]
  ? DeepReadonlyArray386<U>
  : T extends object
  ? DeepReadonlyObject386<T>
  : T;

interface DeepReadonlyArray386<T> extends ReadonlyArray<DeepReadonly386<T>> {}

type DeepReadonlyObject386<T> = {
  readonly [P in keyof T]: DeepReadonly386<T[P]>;
};

type UnionToIntersection386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf386<T> = UnionToIntersection386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push386<T extends unknown[], V> = [...T, V];

type TuplifyUnion386<T, L = LastOf386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push386<TuplifyUnion386<Exclude<T, L>>, L>;

type DeepPartial386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial386<T[P]> }
  : T;

type Paths386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join386<K, Paths386<T[K], Prev386[D]>> : never }[keyof T]
  : never;

type Prev386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig386 {
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

type ConfigPaths386 = Paths386<NestedConfig386>;

interface HeavyProps386 {
  config: DeepPartial386<NestedConfig386>;
  path?: ConfigPaths386;
}

const HeavyComponent386 = memo(function HeavyComponent386({ config }: HeavyProps386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent386.displayName = 'HeavyComponent386';
export default HeavyComponent386;
