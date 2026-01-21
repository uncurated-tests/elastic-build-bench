'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2887<T> = T extends (infer U)[]
  ? DeepReadonlyArray2887<U>
  : T extends object
  ? DeepReadonlyObject2887<T>
  : T;

interface DeepReadonlyArray2887<T> extends ReadonlyArray<DeepReadonly2887<T>> {}

type DeepReadonlyObject2887<T> = {
  readonly [P in keyof T]: DeepReadonly2887<T[P]>;
};

type UnionToIntersection2887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2887<T> = UnionToIntersection2887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2887<T extends unknown[], V> = [...T, V];

type TuplifyUnion2887<T, L = LastOf2887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2887<TuplifyUnion2887<Exclude<T, L>>, L>;

type DeepPartial2887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2887<T[P]> }
  : T;

type Paths2887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2887<K, Paths2887<T[K], Prev2887[D]>> : never }[keyof T]
  : never;

type Prev2887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2887 {
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

type ConfigPaths2887 = Paths2887<NestedConfig2887>;

interface HeavyProps2887 {
  config: DeepPartial2887<NestedConfig2887>;
  path?: ConfigPaths2887;
}

const HeavyComponent2887 = memo(function HeavyComponent2887({ config }: HeavyProps2887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2887.displayName = 'HeavyComponent2887';
export default HeavyComponent2887;
