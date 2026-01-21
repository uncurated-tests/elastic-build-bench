'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly144<T> = T extends (infer U)[]
  ? DeepReadonlyArray144<U>
  : T extends object
  ? DeepReadonlyObject144<T>
  : T;

interface DeepReadonlyArray144<T> extends ReadonlyArray<DeepReadonly144<T>> {}

type DeepReadonlyObject144<T> = {
  readonly [P in keyof T]: DeepReadonly144<T[P]>;
};

type UnionToIntersection144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf144<T> = UnionToIntersection144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push144<T extends unknown[], V> = [...T, V];

type TuplifyUnion144<T, L = LastOf144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push144<TuplifyUnion144<Exclude<T, L>>, L>;

type DeepPartial144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial144<T[P]> }
  : T;

type Paths144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join144<K, Paths144<T[K], Prev144[D]>> : never }[keyof T]
  : never;

type Prev144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig144 {
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

type ConfigPaths144 = Paths144<NestedConfig144>;

interface HeavyProps144 {
  config: DeepPartial144<NestedConfig144>;
  path?: ConfigPaths144;
}

const HeavyComponent144 = memo(function HeavyComponent144({ config }: HeavyProps144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent144.displayName = 'HeavyComponent144';
export default HeavyComponent144;
