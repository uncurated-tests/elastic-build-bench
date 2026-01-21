'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1445<T> = T extends (infer U)[]
  ? DeepReadonlyArray1445<U>
  : T extends object
  ? DeepReadonlyObject1445<T>
  : T;

interface DeepReadonlyArray1445<T> extends ReadonlyArray<DeepReadonly1445<T>> {}

type DeepReadonlyObject1445<T> = {
  readonly [P in keyof T]: DeepReadonly1445<T[P]>;
};

type UnionToIntersection1445<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1445<T> = UnionToIntersection1445<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1445<T extends unknown[], V> = [...T, V];

type TuplifyUnion1445<T, L = LastOf1445<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1445<TuplifyUnion1445<Exclude<T, L>>, L>;

type DeepPartial1445<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1445<T[P]> }
  : T;

type Paths1445<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1445<K, Paths1445<T[K], Prev1445[D]>> : never }[keyof T]
  : never;

type Prev1445 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1445<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1445 {
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

type ConfigPaths1445 = Paths1445<NestedConfig1445>;

interface HeavyProps1445 {
  config: DeepPartial1445<NestedConfig1445>;
  path?: ConfigPaths1445;
}

const HeavyComponent1445 = memo(function HeavyComponent1445({ config }: HeavyProps1445) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1445) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1445 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1445: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1445.displayName = 'HeavyComponent1445';
export default HeavyComponent1445;
