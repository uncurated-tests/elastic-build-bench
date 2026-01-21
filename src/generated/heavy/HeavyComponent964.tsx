'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly964<T> = T extends (infer U)[]
  ? DeepReadonlyArray964<U>
  : T extends object
  ? DeepReadonlyObject964<T>
  : T;

interface DeepReadonlyArray964<T> extends ReadonlyArray<DeepReadonly964<T>> {}

type DeepReadonlyObject964<T> = {
  readonly [P in keyof T]: DeepReadonly964<T[P]>;
};

type UnionToIntersection964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf964<T> = UnionToIntersection964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push964<T extends unknown[], V> = [...T, V];

type TuplifyUnion964<T, L = LastOf964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push964<TuplifyUnion964<Exclude<T, L>>, L>;

type DeepPartial964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial964<T[P]> }
  : T;

type Paths964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join964<K, Paths964<T[K], Prev964[D]>> : never }[keyof T]
  : never;

type Prev964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig964 {
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

type ConfigPaths964 = Paths964<NestedConfig964>;

interface HeavyProps964 {
  config: DeepPartial964<NestedConfig964>;
  path?: ConfigPaths964;
}

const HeavyComponent964 = memo(function HeavyComponent964({ config }: HeavyProps964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent964.displayName = 'HeavyComponent964';
export default HeavyComponent964;
