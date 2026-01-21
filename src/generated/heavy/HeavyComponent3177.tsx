'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3177<T> = T extends (infer U)[]
  ? DeepReadonlyArray3177<U>
  : T extends object
  ? DeepReadonlyObject3177<T>
  : T;

interface DeepReadonlyArray3177<T> extends ReadonlyArray<DeepReadonly3177<T>> {}

type DeepReadonlyObject3177<T> = {
  readonly [P in keyof T]: DeepReadonly3177<T[P]>;
};

type UnionToIntersection3177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3177<T> = UnionToIntersection3177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3177<T extends unknown[], V> = [...T, V];

type TuplifyUnion3177<T, L = LastOf3177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3177<TuplifyUnion3177<Exclude<T, L>>, L>;

type DeepPartial3177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3177<T[P]> }
  : T;

type Paths3177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3177<K, Paths3177<T[K], Prev3177[D]>> : never }[keyof T]
  : never;

type Prev3177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3177 {
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

type ConfigPaths3177 = Paths3177<NestedConfig3177>;

interface HeavyProps3177 {
  config: DeepPartial3177<NestedConfig3177>;
  path?: ConfigPaths3177;
}

const HeavyComponent3177 = memo(function HeavyComponent3177({ config }: HeavyProps3177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3177.displayName = 'HeavyComponent3177';
export default HeavyComponent3177;
