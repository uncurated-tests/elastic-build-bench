'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2964<T> = T extends (infer U)[]
  ? DeepReadonlyArray2964<U>
  : T extends object
  ? DeepReadonlyObject2964<T>
  : T;

interface DeepReadonlyArray2964<T> extends ReadonlyArray<DeepReadonly2964<T>> {}

type DeepReadonlyObject2964<T> = {
  readonly [P in keyof T]: DeepReadonly2964<T[P]>;
};

type UnionToIntersection2964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2964<T> = UnionToIntersection2964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2964<T extends unknown[], V> = [...T, V];

type TuplifyUnion2964<T, L = LastOf2964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2964<TuplifyUnion2964<Exclude<T, L>>, L>;

type DeepPartial2964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2964<T[P]> }
  : T;

type Paths2964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2964<K, Paths2964<T[K], Prev2964[D]>> : never }[keyof T]
  : never;

type Prev2964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2964 {
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

type ConfigPaths2964 = Paths2964<NestedConfig2964>;

interface HeavyProps2964 {
  config: DeepPartial2964<NestedConfig2964>;
  path?: ConfigPaths2964;
}

const HeavyComponent2964 = memo(function HeavyComponent2964({ config }: HeavyProps2964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2964.displayName = 'HeavyComponent2964';
export default HeavyComponent2964;
