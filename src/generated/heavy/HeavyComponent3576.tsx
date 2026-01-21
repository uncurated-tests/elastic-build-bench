'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3576<T> = T extends (infer U)[]
  ? DeepReadonlyArray3576<U>
  : T extends object
  ? DeepReadonlyObject3576<T>
  : T;

interface DeepReadonlyArray3576<T> extends ReadonlyArray<DeepReadonly3576<T>> {}

type DeepReadonlyObject3576<T> = {
  readonly [P in keyof T]: DeepReadonly3576<T[P]>;
};

type UnionToIntersection3576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3576<T> = UnionToIntersection3576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3576<T extends unknown[], V> = [...T, V];

type TuplifyUnion3576<T, L = LastOf3576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3576<TuplifyUnion3576<Exclude<T, L>>, L>;

type DeepPartial3576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3576<T[P]> }
  : T;

type Paths3576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3576<K, Paths3576<T[K], Prev3576[D]>> : never }[keyof T]
  : never;

type Prev3576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3576 {
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

type ConfigPaths3576 = Paths3576<NestedConfig3576>;

interface HeavyProps3576 {
  config: DeepPartial3576<NestedConfig3576>;
  path?: ConfigPaths3576;
}

const HeavyComponent3576 = memo(function HeavyComponent3576({ config }: HeavyProps3576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3576.displayName = 'HeavyComponent3576';
export default HeavyComponent3576;
