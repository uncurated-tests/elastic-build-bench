'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1268<T> = T extends (infer U)[]
  ? DeepReadonlyArray1268<U>
  : T extends object
  ? DeepReadonlyObject1268<T>
  : T;

interface DeepReadonlyArray1268<T> extends ReadonlyArray<DeepReadonly1268<T>> {}

type DeepReadonlyObject1268<T> = {
  readonly [P in keyof T]: DeepReadonly1268<T[P]>;
};

type UnionToIntersection1268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1268<T> = UnionToIntersection1268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1268<T extends unknown[], V> = [...T, V];

type TuplifyUnion1268<T, L = LastOf1268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1268<TuplifyUnion1268<Exclude<T, L>>, L>;

type DeepPartial1268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1268<T[P]> }
  : T;

type Paths1268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1268<K, Paths1268<T[K], Prev1268[D]>> : never }[keyof T]
  : never;

type Prev1268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1268 {
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

type ConfigPaths1268 = Paths1268<NestedConfig1268>;

interface HeavyProps1268 {
  config: DeepPartial1268<NestedConfig1268>;
  path?: ConfigPaths1268;
}

const HeavyComponent1268 = memo(function HeavyComponent1268({ config }: HeavyProps1268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1268.displayName = 'HeavyComponent1268';
export default HeavyComponent1268;
