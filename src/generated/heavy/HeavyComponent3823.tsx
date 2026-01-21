'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3823<T> = T extends (infer U)[]
  ? DeepReadonlyArray3823<U>
  : T extends object
  ? DeepReadonlyObject3823<T>
  : T;

interface DeepReadonlyArray3823<T> extends ReadonlyArray<DeepReadonly3823<T>> {}

type DeepReadonlyObject3823<T> = {
  readonly [P in keyof T]: DeepReadonly3823<T[P]>;
};

type UnionToIntersection3823<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3823<T> = UnionToIntersection3823<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3823<T extends unknown[], V> = [...T, V];

type TuplifyUnion3823<T, L = LastOf3823<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3823<TuplifyUnion3823<Exclude<T, L>>, L>;

type DeepPartial3823<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3823<T[P]> }
  : T;

type Paths3823<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3823<K, Paths3823<T[K], Prev3823[D]>> : never }[keyof T]
  : never;

type Prev3823 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3823<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3823 {
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

type ConfigPaths3823 = Paths3823<NestedConfig3823>;

interface HeavyProps3823 {
  config: DeepPartial3823<NestedConfig3823>;
  path?: ConfigPaths3823;
}

const HeavyComponent3823 = memo(function HeavyComponent3823({ config }: HeavyProps3823) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3823) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3823 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3823: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3823.displayName = 'HeavyComponent3823';
export default HeavyComponent3823;
