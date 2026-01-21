'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly306<T> = T extends (infer U)[]
  ? DeepReadonlyArray306<U>
  : T extends object
  ? DeepReadonlyObject306<T>
  : T;

interface DeepReadonlyArray306<T> extends ReadonlyArray<DeepReadonly306<T>> {}

type DeepReadonlyObject306<T> = {
  readonly [P in keyof T]: DeepReadonly306<T[P]>;
};

type UnionToIntersection306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf306<T> = UnionToIntersection306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push306<T extends unknown[], V> = [...T, V];

type TuplifyUnion306<T, L = LastOf306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push306<TuplifyUnion306<Exclude<T, L>>, L>;

type DeepPartial306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial306<T[P]> }
  : T;

type Paths306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join306<K, Paths306<T[K], Prev306[D]>> : never }[keyof T]
  : never;

type Prev306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig306 {
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

type ConfigPaths306 = Paths306<NestedConfig306>;

interface HeavyProps306 {
  config: DeepPartial306<NestedConfig306>;
  path?: ConfigPaths306;
}

const HeavyComponent306 = memo(function HeavyComponent306({ config }: HeavyProps306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent306.displayName = 'HeavyComponent306';
export default HeavyComponent306;
