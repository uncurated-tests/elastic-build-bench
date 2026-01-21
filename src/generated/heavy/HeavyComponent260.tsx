'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly260<T> = T extends (infer U)[]
  ? DeepReadonlyArray260<U>
  : T extends object
  ? DeepReadonlyObject260<T>
  : T;

interface DeepReadonlyArray260<T> extends ReadonlyArray<DeepReadonly260<T>> {}

type DeepReadonlyObject260<T> = {
  readonly [P in keyof T]: DeepReadonly260<T[P]>;
};

type UnionToIntersection260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf260<T> = UnionToIntersection260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push260<T extends unknown[], V> = [...T, V];

type TuplifyUnion260<T, L = LastOf260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push260<TuplifyUnion260<Exclude<T, L>>, L>;

type DeepPartial260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial260<T[P]> }
  : T;

type Paths260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join260<K, Paths260<T[K], Prev260[D]>> : never }[keyof T]
  : never;

type Prev260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig260 {
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

type ConfigPaths260 = Paths260<NestedConfig260>;

interface HeavyProps260 {
  config: DeepPartial260<NestedConfig260>;
  path?: ConfigPaths260;
}

const HeavyComponent260 = memo(function HeavyComponent260({ config }: HeavyProps260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent260.displayName = 'HeavyComponent260';
export default HeavyComponent260;
