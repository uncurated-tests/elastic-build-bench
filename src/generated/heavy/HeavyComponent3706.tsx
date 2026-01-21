'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3706<T> = T extends (infer U)[]
  ? DeepReadonlyArray3706<U>
  : T extends object
  ? DeepReadonlyObject3706<T>
  : T;

interface DeepReadonlyArray3706<T> extends ReadonlyArray<DeepReadonly3706<T>> {}

type DeepReadonlyObject3706<T> = {
  readonly [P in keyof T]: DeepReadonly3706<T[P]>;
};

type UnionToIntersection3706<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3706<T> = UnionToIntersection3706<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3706<T extends unknown[], V> = [...T, V];

type TuplifyUnion3706<T, L = LastOf3706<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3706<TuplifyUnion3706<Exclude<T, L>>, L>;

type DeepPartial3706<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3706<T[P]> }
  : T;

type Paths3706<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3706<K, Paths3706<T[K], Prev3706[D]>> : never }[keyof T]
  : never;

type Prev3706 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3706<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3706 {
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

type ConfigPaths3706 = Paths3706<NestedConfig3706>;

interface HeavyProps3706 {
  config: DeepPartial3706<NestedConfig3706>;
  path?: ConfigPaths3706;
}

const HeavyComponent3706 = memo(function HeavyComponent3706({ config }: HeavyProps3706) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3706) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3706 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3706: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3706.displayName = 'HeavyComponent3706';
export default HeavyComponent3706;
