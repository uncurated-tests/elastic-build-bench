'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1658<T> = T extends (infer U)[]
  ? DeepReadonlyArray1658<U>
  : T extends object
  ? DeepReadonlyObject1658<T>
  : T;

interface DeepReadonlyArray1658<T> extends ReadonlyArray<DeepReadonly1658<T>> {}

type DeepReadonlyObject1658<T> = {
  readonly [P in keyof T]: DeepReadonly1658<T[P]>;
};

type UnionToIntersection1658<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1658<T> = UnionToIntersection1658<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1658<T extends unknown[], V> = [...T, V];

type TuplifyUnion1658<T, L = LastOf1658<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1658<TuplifyUnion1658<Exclude<T, L>>, L>;

type DeepPartial1658<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1658<T[P]> }
  : T;

type Paths1658<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1658<K, Paths1658<T[K], Prev1658[D]>> : never }[keyof T]
  : never;

type Prev1658 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1658<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1658 {
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

type ConfigPaths1658 = Paths1658<NestedConfig1658>;

interface HeavyProps1658 {
  config: DeepPartial1658<NestedConfig1658>;
  path?: ConfigPaths1658;
}

const HeavyComponent1658 = memo(function HeavyComponent1658({ config }: HeavyProps1658) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1658) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1658 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1658: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1658.displayName = 'HeavyComponent1658';
export default HeavyComponent1658;
