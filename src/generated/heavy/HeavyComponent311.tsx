'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly311<T> = T extends (infer U)[]
  ? DeepReadonlyArray311<U>
  : T extends object
  ? DeepReadonlyObject311<T>
  : T;

interface DeepReadonlyArray311<T> extends ReadonlyArray<DeepReadonly311<T>> {}

type DeepReadonlyObject311<T> = {
  readonly [P in keyof T]: DeepReadonly311<T[P]>;
};

type UnionToIntersection311<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf311<T> = UnionToIntersection311<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push311<T extends unknown[], V> = [...T, V];

type TuplifyUnion311<T, L = LastOf311<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push311<TuplifyUnion311<Exclude<T, L>>, L>;

type DeepPartial311<T> = T extends object
  ? { [P in keyof T]?: DeepPartial311<T[P]> }
  : T;

type Paths311<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join311<K, Paths311<T[K], Prev311[D]>> : never }[keyof T]
  : never;

type Prev311 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join311<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig311 {
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

type ConfigPaths311 = Paths311<NestedConfig311>;

interface HeavyProps311 {
  config: DeepPartial311<NestedConfig311>;
  path?: ConfigPaths311;
}

const HeavyComponent311 = memo(function HeavyComponent311({ config }: HeavyProps311) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 311) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-311 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H311: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent311.displayName = 'HeavyComponent311';
export default HeavyComponent311;
