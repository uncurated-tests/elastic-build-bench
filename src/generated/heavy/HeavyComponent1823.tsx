'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1823<T> = T extends (infer U)[]
  ? DeepReadonlyArray1823<U>
  : T extends object
  ? DeepReadonlyObject1823<T>
  : T;

interface DeepReadonlyArray1823<T> extends ReadonlyArray<DeepReadonly1823<T>> {}

type DeepReadonlyObject1823<T> = {
  readonly [P in keyof T]: DeepReadonly1823<T[P]>;
};

type UnionToIntersection1823<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1823<T> = UnionToIntersection1823<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1823<T extends unknown[], V> = [...T, V];

type TuplifyUnion1823<T, L = LastOf1823<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1823<TuplifyUnion1823<Exclude<T, L>>, L>;

type DeepPartial1823<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1823<T[P]> }
  : T;

type Paths1823<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1823<K, Paths1823<T[K], Prev1823[D]>> : never }[keyof T]
  : never;

type Prev1823 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1823<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1823 {
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

type ConfigPaths1823 = Paths1823<NestedConfig1823>;

interface HeavyProps1823 {
  config: DeepPartial1823<NestedConfig1823>;
  path?: ConfigPaths1823;
}

const HeavyComponent1823 = memo(function HeavyComponent1823({ config }: HeavyProps1823) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1823) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1823 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1823: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1823.displayName = 'HeavyComponent1823';
export default HeavyComponent1823;
