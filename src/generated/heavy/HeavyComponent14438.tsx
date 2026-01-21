'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14438<T> = T extends (infer U)[]
  ? DeepReadonlyArray14438<U>
  : T extends object
  ? DeepReadonlyObject14438<T>
  : T;

interface DeepReadonlyArray14438<T> extends ReadonlyArray<DeepReadonly14438<T>> {}

type DeepReadonlyObject14438<T> = {
  readonly [P in keyof T]: DeepReadonly14438<T[P]>;
};

type UnionToIntersection14438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14438<T> = UnionToIntersection14438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14438<T extends unknown[], V> = [...T, V];

type TuplifyUnion14438<T, L = LastOf14438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14438<TuplifyUnion14438<Exclude<T, L>>, L>;

type DeepPartial14438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14438<T[P]> }
  : T;

type Paths14438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14438<K, Paths14438<T[K], Prev14438[D]>> : never }[keyof T]
  : never;

type Prev14438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14438 {
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

type ConfigPaths14438 = Paths14438<NestedConfig14438>;

interface HeavyProps14438 {
  config: DeepPartial14438<NestedConfig14438>;
  path?: ConfigPaths14438;
}

const HeavyComponent14438 = memo(function HeavyComponent14438({ config }: HeavyProps14438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14438.displayName = 'HeavyComponent14438';
export default HeavyComponent14438;
