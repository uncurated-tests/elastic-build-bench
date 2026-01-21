'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2996<T> = T extends (infer U)[]
  ? DeepReadonlyArray2996<U>
  : T extends object
  ? DeepReadonlyObject2996<T>
  : T;

interface DeepReadonlyArray2996<T> extends ReadonlyArray<DeepReadonly2996<T>> {}

type DeepReadonlyObject2996<T> = {
  readonly [P in keyof T]: DeepReadonly2996<T[P]>;
};

type UnionToIntersection2996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2996<T> = UnionToIntersection2996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2996<T extends unknown[], V> = [...T, V];

type TuplifyUnion2996<T, L = LastOf2996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2996<TuplifyUnion2996<Exclude<T, L>>, L>;

type DeepPartial2996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2996<T[P]> }
  : T;

type Paths2996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2996<K, Paths2996<T[K], Prev2996[D]>> : never }[keyof T]
  : never;

type Prev2996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2996 {
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

type ConfigPaths2996 = Paths2996<NestedConfig2996>;

interface HeavyProps2996 {
  config: DeepPartial2996<NestedConfig2996>;
  path?: ConfigPaths2996;
}

const HeavyComponent2996 = memo(function HeavyComponent2996({ config }: HeavyProps2996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2996.displayName = 'HeavyComponent2996';
export default HeavyComponent2996;
