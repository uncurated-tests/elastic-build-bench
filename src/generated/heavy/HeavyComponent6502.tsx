'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6502<T> = T extends (infer U)[]
  ? DeepReadonlyArray6502<U>
  : T extends object
  ? DeepReadonlyObject6502<T>
  : T;

interface DeepReadonlyArray6502<T> extends ReadonlyArray<DeepReadonly6502<T>> {}

type DeepReadonlyObject6502<T> = {
  readonly [P in keyof T]: DeepReadonly6502<T[P]>;
};

type UnionToIntersection6502<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6502<T> = UnionToIntersection6502<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6502<T extends unknown[], V> = [...T, V];

type TuplifyUnion6502<T, L = LastOf6502<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6502<TuplifyUnion6502<Exclude<T, L>>, L>;

type DeepPartial6502<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6502<T[P]> }
  : T;

type Paths6502<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6502<K, Paths6502<T[K], Prev6502[D]>> : never }[keyof T]
  : never;

type Prev6502 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6502<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6502 {
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

type ConfigPaths6502 = Paths6502<NestedConfig6502>;

interface HeavyProps6502 {
  config: DeepPartial6502<NestedConfig6502>;
  path?: ConfigPaths6502;
}

const HeavyComponent6502 = memo(function HeavyComponent6502({ config }: HeavyProps6502) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6502) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6502 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6502: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6502.displayName = 'HeavyComponent6502';
export default HeavyComponent6502;
