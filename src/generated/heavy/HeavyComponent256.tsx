'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly256<T> = T extends (infer U)[]
  ? DeepReadonlyArray256<U>
  : T extends object
  ? DeepReadonlyObject256<T>
  : T;

interface DeepReadonlyArray256<T> extends ReadonlyArray<DeepReadonly256<T>> {}

type DeepReadonlyObject256<T> = {
  readonly [P in keyof T]: DeepReadonly256<T[P]>;
};

type UnionToIntersection256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf256<T> = UnionToIntersection256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push256<T extends unknown[], V> = [...T, V];

type TuplifyUnion256<T, L = LastOf256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push256<TuplifyUnion256<Exclude<T, L>>, L>;

type DeepPartial256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial256<T[P]> }
  : T;

type Paths256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join256<K, Paths256<T[K], Prev256[D]>> : never }[keyof T]
  : never;

type Prev256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig256 {
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

type ConfigPaths256 = Paths256<NestedConfig256>;

interface HeavyProps256 {
  config: DeepPartial256<NestedConfig256>;
  path?: ConfigPaths256;
}

const HeavyComponent256 = memo(function HeavyComponent256({ config }: HeavyProps256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent256.displayName = 'HeavyComponent256';
export default HeavyComponent256;
