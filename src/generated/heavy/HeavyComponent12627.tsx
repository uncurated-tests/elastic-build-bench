'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12627<T> = T extends (infer U)[]
  ? DeepReadonlyArray12627<U>
  : T extends object
  ? DeepReadonlyObject12627<T>
  : T;

interface DeepReadonlyArray12627<T> extends ReadonlyArray<DeepReadonly12627<T>> {}

type DeepReadonlyObject12627<T> = {
  readonly [P in keyof T]: DeepReadonly12627<T[P]>;
};

type UnionToIntersection12627<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12627<T> = UnionToIntersection12627<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12627<T extends unknown[], V> = [...T, V];

type TuplifyUnion12627<T, L = LastOf12627<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12627<TuplifyUnion12627<Exclude<T, L>>, L>;

type DeepPartial12627<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12627<T[P]> }
  : T;

type Paths12627<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12627<K, Paths12627<T[K], Prev12627[D]>> : never }[keyof T]
  : never;

type Prev12627 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12627<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12627 {
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

type ConfigPaths12627 = Paths12627<NestedConfig12627>;

interface HeavyProps12627 {
  config: DeepPartial12627<NestedConfig12627>;
  path?: ConfigPaths12627;
}

const HeavyComponent12627 = memo(function HeavyComponent12627({ config }: HeavyProps12627) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12627) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12627 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12627: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12627.displayName = 'HeavyComponent12627';
export default HeavyComponent12627;
